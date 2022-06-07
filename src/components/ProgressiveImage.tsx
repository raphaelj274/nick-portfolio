import React, { Component, FC, useEffect, useState } from "react";

export interface ProgressiveImageProps {
  src: string,
  placeholder: string,
  alt: string,
  width?: string,
  main: boolean
  onClick?: Function
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
    const { alt, width, main, onClick } = this.props;
    const relatedStyles = {
      opacity: loading ? 0.5 : 1,
      transition: "opacity .15s linear",
      width: '20%',
      objectFit: 'cover'
    }
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

export const ProgressiveImageFC: FC<ProgressiveImageProps> = ({placeholder, alt, width, main, onClick, src}) => {
  const [loading, setLoading] = useState(true)
  const [currentSrc, setCurrentSrc] = useState(placeholder)

  const relatedStyles = {
    opacity: loading ? 0.5 : 1,
    transition: "opacity .15s linear",
    width: '20%',
    objectFit: 'cover'
  }
  const mainStyles = {
    opacity: loading ? 0.5 : 1,
    transition: "opacity .15s linear",
  }

  useEffect(() => {
    // start loading original image
    const imageToLoad = new Image();
    imageToLoad.src = src;
    imageToLoad.onload = () =>
      // When image is loaded replace the image's src and set loading to false
      setCurrentSrc(src)
      setLoading(!loading)
  }, [])


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