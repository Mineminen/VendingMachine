<%@ page language="java" import="java.util.*" pageEncoding="UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>
<%@ taglib uri="http://jsptags.com/tags/navigation/pager" prefix="pg"  %>

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
    								用户登录
    							</h3>
    						</div>
    						<div class="bz-breadcrumb-list">
    							<a href="<%=path%>/index.action">
    								网站首页
    							</a>
    							<span>
    								用户登录
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
    									
										  <jsp:include flush="true" page="/qiantai/left.jsp"></jsp:include>
	                                    
    									<div class="col-xl-8 col-lg-8">
    										<div class="row pt-10 pb-10">
    											
	                                         
	                                          <form  action="<%=path %>/membersLogin.action" method="post" id="form1">    
<table style="width: 100%;line-height:30px;font-size:13px" >
        <tr><td  style="text-align:right; width:20%;">
<font style='color:red'>*&nbsp;</font>账号:</td><td>
<input name="lname" type="text" id="lname" style="width: 200px;"  required  pattern="^[a-zA-Z][a-zA-Z0-9_]{4,15}$"  />
 </td></tr>

<tr><td  style="text-align:right; width:20%;">
<font style='color:red'>*&nbsp;</font>登录密码:</td><td>
<input name="password" type="password" id="password" style="width: 200px; " required />
 </td></tr>



        <tr>
            <td>&nbsp;</td>
            <td align="left">    
                <input type="submit" name="btnALogin" value="登 录"      class="button" />
           </td>
        </tr>
    </table>
</form>


	                                           
	                                            
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


