<h1>news</h1>
{{list | dump}}
{% for item in list %}
<p>{{item.title}}</p>
{% endfor %}