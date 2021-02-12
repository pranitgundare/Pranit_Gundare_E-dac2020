<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>


    <%@ include file="common-css-js.jsp"%>
    
    
<% 
if(session.getAttribute("my-auth") == null) {
  response.sendRedirect("/day14-project/login.jsp");
  }
%>
    
    <jsp:include page="common-header.jsp"></jsp:include>
    
    <body>
    <div class="container-fluid">
    
    <div class="row bg-info" style="height: 100vh">

			<div
				class="col-12 text-light  d-flex flex-column justify-content-center align-items-center"
				>
				<div class="bg-dark text-warning px-4 py-2 rounded"
					style="font-size: 1.75rem; font-family: cursive">Our Service</div>

				<div class="row mt-4">
					<div class="col-10 offset-1"
						style="text-align: center; font-size: 1.5rem; font-family: cursive">
    
                       Business is not just doing deals; business is having great products, doing great engineering, and providing tremendous service to customers. Finally, business is a cobweb of human relationships.
    
						</div>

				</div>

			</div>

     </div>
    
    </div>
</body>
</html>