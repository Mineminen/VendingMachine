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
    								修改个人信息
    							</h3>
    						</div>
    						<div class="bz-breadcrumb-list">
    							<a href="<%=path%>/index.action">
    								网站首页
    							</a>
    							<span>
    								修改个人信息
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
    											
    											
	                                            <form  action="<%=path %>/members_Edit.action" method="post"  id="form1">
    <table style="width: 100%;" >
        <tr><td  style="text-align:right; width:20%;">
<font style='color:red'>*&nbsp;</font>账号:</td><td>
<input name="lname1" type="text" id="lname" style="width: 200px;"  required  pattern="^[a-zA-Z][a-zA-Z0-9_]{4,15}$"   value='${members.lname}' />
 </td></tr>

<tr><td  style="text-align:right; width:20%;">
<font style='color:red'>*&nbsp;</font>姓名:</td><td>
<input name="mname" type="text" id="mname" style="width: 200px;" required  value='${members.mname}' />
 </td></tr>

<tr><td  style="text-align:right; width:20%;">
<font style='color:red'>*&nbsp;</font>手机号码:</td><td>
<input name="phone" type="text" id="phone" style="width: 200px;"  required   pattern="^(13|15|17|18|19)[0-9]{9}$"   value='${members.phone}' />
 </td></tr>

<tr><td  style="text-align:right; width:20%;">
<font style='color:red'>*&nbsp;</font>Email:</td><td>
<input name="email" type="text" id="email" style="width: 200px;"  required   pattern="\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}"   value='${members.email}' />
 </td></tr>

<tr><td  style="text-align:right; width:20%;">
<font style='color:red'>*&nbsp;</font>联系地址:</td><td>
<input name="address" type="text" id="address" style="width: 200px;" required  value='${members.address}' />
 </td></tr>



        <tr>
            <td>&nbsp;</td>
            <td align="left">
                <input name="lname" type="hidden" id="id" value='${members.lname}'>
                <input type="submit" name="btnAdd" value="保 存"      class="button" />
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


