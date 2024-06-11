<jsp:useBean id="env" scope="request" type="java.lang.String"/>
<jsp:useBean id="app_name" scope="request" type="java.lang.String"/>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ taglib prefix="vite" uri="https://github.com/benny123tw/tags" %>
<html>
<head>
    <title>${app_name} - ${env}</title>
    <vite:import entry="src/main.ts"/>
</head>
<body>

<div id="app"></div>
<form:form action="/spring_mvc/world" method="post" modelAttribute="form">
    <form:input path="name"/>
    
    <form:button>Submit</form:button>
</form:form>

</body>
</html>
