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
    								修改密码
    							</h3>
    						</div>
    						<div class="bz-breadcrumb-list">
    							<a href="<%=path%>/index.action">
    								网站首页
    							</a>
    							<span>
    								修改密码
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
    											
    											
	                                            <form  action="<%=path %>/members_Password.action" method="post"  id="form1">
    <table style="width: 100%;" >
        <tr>
            <td  style=" text-align:right; width:30%;"><font style='color:red'>*&nbsp;</font>原密码:</td>
            <td class="tbright"><input name="txt_pwd" id="txt_pwd" type="password" required /></td>
        </tr>
        <tr>
            <td  style=" text-align:right; width:30%;"><font style='color:red'>*&nbsp;</font>新密码:</td>
            <td class="tbright"><input name="txt_pwd2" id="txt_pwd2" type="password" required /></td>
        </tr>
        <tr>
            <td  style=" text-align:right; width:30%;"><font style='color:red'>*&nbsp;</font>确认密码:</td>
            <td class="tbright"><input name="txt_pwd3"  id="txt_pwd3" type="password" required /> </td>
        </tr>
        <tr>
            <td>&nbsp;</td>
            <td align="left">             
                <input type="submit" name="btnAdd" value="确 定"      class="button" />
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


