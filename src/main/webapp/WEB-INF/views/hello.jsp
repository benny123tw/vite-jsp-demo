<jsp:useBean id="env" scope="request" type="java.lang.String"/>
<jsp:useBean id="app_name" scope="request" type="java.lang.String"/>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ taglib prefix="vite" uri="https://github.com/benny123tw/tags" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html>
<head>
    <link rel="icon" type="image/x-icon" href="<c:url value="/resources/icon.svg"/>">
    <title>${app_name} - ${env}</title>
    <vite:import entry="src/main.ts"/>
</head>
<body>

<div id="app"></div>
<form:form id="greeting-form" action="/spring_mvc/world" method="post" modelAttribute="form">
    <div class="form-group">
        <form:label path="name">Greeting to?</form:label>
        <form:input path="name"/>
    </div>
    <form:button>Submit</form:button>
</form:form>

</body>
</html>
