const scrollToHash = (project: string) : void => {
  setTimeout(() => {
    document.getElementById(project)!.scrollIntoView();
  }, 0)
}

const scrollToTop = () : void => {

  // we can modify this function in future if the scroll to top behaviour doesn't work properly...
  // ...on certain devices - not an issue for now

  window.scrollTo(0, 0)
}

export { scrollToHash, scrollToTop }