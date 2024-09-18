
const library = [
    {
      title: "Book 1",
      author: "Author 1",
      status: {
        own: true,
        reading: false,
        read: false
      }
    },
    {
      title: "Book 2",
      author: "Author 2",
      status: {
        own: true,
        reading: false,
        read: false
      }
    },
    {
      title: "Book 3",
      author: "Author 3",
      status: {
        own: true,
        reading: false,
        read: false
      }
    }
  ];
  
 
  library.forEach(book => {
    book.status.read = true;
  });
  
 
  const [{ title: firstBook }] = library;
  console.log(firstBook); // "Book 1"
  
  
  const libraryJSON = JSON.stringify(library);
  console.log(libraryJSON);
  