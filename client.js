(function() {

    const eventSource = new EventSource('http://localhost:8000')

    function updateMessage (message){
        const list = document.getElementById('messages')
        const item = document.createElement('li')
        item.textContent = message
        list.appendChild(item)
    }

    eventSource.onmessage = function (event){
        updateMessage(event.data)
    }

    eventSource.onerror = function (event){
        updateMessage(`Server closed connection`)
        eventSource.close()
    }

})();