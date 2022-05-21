const scrollToHash = (project: string) : void => {
  if (project) {
    setTimeout(() => {
      document.getElementById(project)!.scrollIntoView();
    }, 0)
  }
  else {
    window.scrollTo(0, 0)
  }
}

export default scrollToHash