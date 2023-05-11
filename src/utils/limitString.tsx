

export  const limitString = (i:number , str:string) => {
    if (str.length > i) {
      return { string: str.slice(0, i).concat('...')}
    }
    return {string: str}
  }