<h1>
  登陆页面
</h1>
{# {% if typeof error !== 'undefined' %}
<div class="alert alert-error">
  <a class="close" data-dismiss="alert" href="#">&times;</a>
  <strong><%= error %></strong>
</div>
{% endif %} #}
{# {{ csrf }} #}
<form action="/auth" method="post">
  <input type="text" name="username" />
  <input type="password" name="password" />
  <input type="submit" />
</form>