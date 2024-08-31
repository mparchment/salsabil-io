export function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { month: 'long', day: 'numeric' };
    const formattedDate = date.toLocaleDateString('en-US', options);
  
    const currentYear = new Date().getFullYear();
    const dateYear = date.getFullYear();
  
    if (dateYear < currentYear) {
      return `${formattedDate}, ${dateYear}`;
    }
    return formattedDate;
  }
  