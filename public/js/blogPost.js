const blogPost = async (event) => {
    event.preventDefault();
  
    const description = document.querySelector('#blog-post').value.trim();
    const title = document.querySelector('#blog-title').value.trim();
  
    if (title && description) {
      const response = await fetch(`/api/projects`, {
        method: 'POST',
        body: JSON.stringify({ title, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
    }
  };
  

  
  document
    .querySelector('#post-button')
    .addEventListener('click', blogPost);
  
  
  