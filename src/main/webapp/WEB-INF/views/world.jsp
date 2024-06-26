<%@ taglib prefix="vite" uri="https://javite.com/tags" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<jsp:useBean id="message" scope="request" type="java.lang.String"/>
<html>
<head>
    <link rel="icon" type="image/x-icon" href="<c:url value="/resources/icon.svg"/>">
    <title>World</title>
    <vite:import entry="src/world/main.ts"/>
</head>
<body>

<div id="text"></div>
<h1>JSP message: ${message}</h1>

<div class="container">
    <button id="back-button">Back</button>
    <button id="hello-button">Hello</button>
    <button class="btn" id="world-button">World</button>
</div>

</body>
</html>
