<%@ taglib prefix="vite" uri="https://github.com/benny123tw/tags" %>
<jsp:useBean id="message" scope="request" type="java.lang.String"/>
<html>
<head>
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

<div id="random-number"></div>
</body>
</html>
