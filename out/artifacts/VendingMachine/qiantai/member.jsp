<%@ page language="java" import="java.util.*" pageEncoding="UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>

<%
String path = request.getContextPath();
String basePath = request.getScheme() + "://"+ request.getServerName() + ":" + request.getServerPort()+ path + "/";
%>

<jsp:include flush="true" page="/qiantai/head.jsp"></jsp:include>


<main>
    	<div class="breadcrumb-area">
    		<div class="container">
    			<div class="row">
    				<div class="col-xl-12">
    					<div class="bz-breadcrumb-wrap d-flex justify-content-between align-items-center">
    						<div class="bz-breadcrumb-content">
    							<h3 class="bz-breadcrumb-content-title">
    								欢迎页面
    							</h3>
    						</div>
    						<div class="bz-breadcrumb-list">
    							<a href="<%=path%>/index.action">
    								网站首页
    							</a>
    							<span>
    								欢迎页面
    							</span>
    						</div>
    					</div>
    				</div>
    			</div>
    		</div>
    	</div>
    	<div class="shop-area">
    		<div class="container">
    			<div class="row">
    				<div class="col-xl-12">
    					<div class="tab-content" id="nav-product-tabContent">
    						<div class="tab-pane fade show active" id="nav-grid" role="tabpanel" aria-labelledby="nav-grid-tab">
    							<div class="shop-grid-product-tab-wrapper">
    								<div class="row">
    									
									 <jsp:include flush="true" page="/qiantai/menu.jsp"></jsp:include>
	                                    
    									<div class="col-xl-9 col-lg-9">
    										<div class="row pt-10 pb-10">
    											
    											
	                                            
<table style=' width: 100%; text-align:center;line-height:28px;'>
    <tr>
        <td>&nbsp;</td>
    </tr>
    <tr>
        <td>
            您好：<b style="color:red;">
		<%=session.getAttribute("lname")%>

		</b>
        </td>
    </tr>
    <tr>
        <td> 您的IP:

			<%=request.getRemoteAddr()%>

		</td>
	</tr>

    <tr>
        <td> 登录时间：

		<%=new java.text.SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(new java.util.Date())%>

		</td>
    </tr>
    <tr>
        <td>&nbsp;</td>
    </tr>
</table>

	                                            
	                                            
    										</div>
    									</div>
    								</div>
    							</div>
    						</div>
    						
	                        
    					</div>
    				</div>
    			</div>
    		</div>
    	</div>
    </main>




<jsp:include flush="true" page="/qiantai/foot.jsp"></jsp:include>


