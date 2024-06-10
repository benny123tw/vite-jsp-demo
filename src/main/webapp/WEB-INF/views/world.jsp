<%@ taglib prefix="vite" uri="https://github.com/benny123tw/tags" %>
<jsp:useBean id="message" scope="request" type="java.lang.String"/>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>World</title>
    <vite:import entry="src/world/main.ts"/>
</head>
<body>
<h1>This is message from JSP: ${message}</h1>

<button id="back-button">Back</button>
<button id="hello-button">Hello</button>
<button class="btn" id="world-button">World</button>

</body>
</html>
