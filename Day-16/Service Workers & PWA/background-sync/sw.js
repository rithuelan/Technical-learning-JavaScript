self.addEventListener('sync', event => {
  if(event.tag === 'sync-data') {
    event.waitUntil(
      // Here you would retry sending data to server
      console.log('[SW] Background sync triggered')
    );
  }
});


//to run
//npm init -y
//npm install -g http-server
//http-server -p 8080
