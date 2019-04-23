<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/rrweb-player@latest/dist/style.css"
/>
<script src="https://cdn.jsdelivr.net/npm/rrweb-player@latest/dist/index.js"></script>
<script src="https://cdn.bootcss.com/jquery/3.4.0/jquery.min.js"></script>
<script src="/public/fetch.js"></script>
<script src="/public/pako.min.js"></script>
<div>
	<h1>回放</h1>
</div>

<script>

function unzip(b64Data){
	var strData     = atob(b64Data);
	var data = pako.ungzip(strData, { to: 'string' });
	return data;
}
 
function zip(str){
	var binaryString = pako.gzip(str, { to: 'string' });
	return btoa(binaryString);
}
	fetch('/review/get?id=5cb6cced3db22d352542fa64', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(function(response) {
    return response.json();
  }).then((myJson) => {
		const events = myJson.info.data;
		const str = JSON.stringify(events);
		console.log(str.length);
		const result = zip(str);
		console.log(result.length)
		const outResult = unzip(result);
		const event = JSON.parse(outResult)
		console.log(event)
		new rrwebPlayer({
			target: document.body, // 可以自定义 DOM 元素
			data: {
				events: event,
			},
		});
	})
  {# .then(function(myJson) {
    console.log(myJson);
		const events = myJson.info.data;
		new rrwebPlayer({
			target: document.body, // 可以自定义 DOM 元素
			data: {
				events,
			},
		});
  }); #}
</script>