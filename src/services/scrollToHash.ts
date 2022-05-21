const scrollToHash = (project: string) : void => {
  setTimeout(() => {
    document.getElementById(project)!.scrollIntoView();
  }, 0)
}

export default scrollToHash