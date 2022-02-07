export const timeDifference = (publishedDate: number) => {
  const todaysDate = new Date().getTime() / 1000
  const difference = Math.floor(todaysDate) - Math.floor(publishedDate)
  const diffInHours = Math.floor(difference / 60 / 60)

  return {
    diffInHours,
  }
}
