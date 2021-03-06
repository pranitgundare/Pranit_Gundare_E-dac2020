
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>

<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<%@ include file="common-css-js.jsp"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Log In</title>

</head>
<body>

	<div class="container-fluid">

		<div class="row bg-dark" style="height: 100vh">

			<div
				class="col-6 text-light border-right d-flex flex-column justify-content-center align-items-center"
				>
				<div class="bg-warning text-dark px-4 py-2 rounded"
					style="font-size: 1.75rem; font-family: cursive">MiniProject</div>

				<div class="row mt-4">
					<div class="col-10 offset-1"
						style="text-align: center; font-size: 1.5rem; font-family: cursive">

						Java is a class-based, object-oriented programming language that
						is designed to have as few implementation dependencies as
						possible. It is a general-purpose programming language intended to
						let application developers write once, run anywhere (WORA),[17]
						meaning that compiled Java code can run on all platforms that
						support Java without the need for recompilation.</div>

				</div>

			</div>




			<div
				class="col-6 text-light d-flex flex-column justify-content-center align-items-center">
				<form action="login-action" method="post" class="" style="width: 50%">
				
				<c:if test="${param.q == 0 }">
					<div class="alert alert-danger">
						 Error, Try Again..!!
					</div>
				</c:if>
				
					<div
						class="bg-light text-dark py-3 rounded d-flex justify-content-center"
						style="font-family: cursive; font-size: 1.5rem; font-weight: bold">
						Log In</div>

					<div class="mt-1">
						<input class="form-control form-control-lg" name="username" type="text"
							placeholder="Username...">
					</div>
                    <div class="mt-1">
                    <input class="form-control form-control-lg" name="password" type="password" placeholder="Password...">
                    </div>
                   
                    <div class="mt-1">
                          <input class="btn btn-warning btn-block" type="submit" value="LogIn">
                    </div>
                    <div class="mt-1">
                          <input class="btn btn-warning btn-block" type="button" value="cancel">
                    </div>
                    <div class="mt-1 d-flex justify-content-center text-primary">
                       <a href="Register.jsp" class="btn btn-link">Register Here..</a>
                    
                    </div>
                    



				</form>




			</div>

		</div>

	</div>
</body>
</html>
