import React, { Component } from "react";

export interface ProgressiveImageProps {
  src: string,
  placeholder: string,
  alt: string,
  width?: string,
  main: boolean,
  onClick?: Function,
  relatedNumber?: number
}

export interface ProgressiveImageState {
  loading: boolean,
  currentSrc: string
}

class ProgressiveImage extends Component<ProgressiveImageProps, ProgressiveImageState> {
  static defaultProps = {
    alt: ""
  };

  constructor(props: ProgressiveImageProps) {
    super(props);
    // initially set loading to true and current src of image to placeholder image
    this.state = {
      loading: true,
      currentSrc: props.placeholder
    };
  }

  componentDidMount() {
    const { src } = this.props;
    // start loading original image
    const imageToLoad = new Image();
    imageToLoad.src = src;
    imageToLoad.onload = () =>
      // When image is loaded replace the image's src and set loading to false
      this.setState({ currentSrc: src, loading: false });
  }

  render() {
    const { currentSrc, loading } = this.state;
    const { alt, width, main, onClick, relatedNumber } = this.props;

    const relatedStyles = {
      opacity: loading ? 0.5 : 1,
      transition: "opacity .15s linear",
      width: relatedNumber ? (100 / relatedNumber - 1).toString() + '%' : '20%',
      objectFit: 'cover' }

    const mainStyles = {
      opacity: loading ? 0.5 : 1,
      transition: "opacity .15s linear",
    }

    return (
      <img
        src={currentSrc}
        className="ProgressiveImage"
        style={main ? mainStyles : relatedStyles}
        alt={alt}
        width={width}
        onClick={() => {
          onClick && onClick()
          }
          }
      />
    );
  }
}

export default ProgressiveImage;