<%@ page language="java" import="java.util.*" pageEncoding="UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>

<%
String path = request.getContextPath();
String basePath = request.getScheme() + "://"+ request.getServerName() + ":" + request.getServerPort()+ path + "/";
%>



<footer class="bz-footer">
    <div class="container">

        <div class="bz-footer-copyright">
            <div class="row align-items-center">
                <div class="col-lg-6 col-md-6 col-sm-7">
                    <p class="bz-footer-copyright-text text-center text-sm-start">© All Rights Reserved by 大学校园自动售货机管理系统</p>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-5">
                    <div class="bz-footer-copyright-social text-sm-end text-center">
                        <a href="<%=path%>/toAdminLogin.action"><i class="fal fa-user"></i> 管理员登录</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer>
<div class="bz-overlay"></div>

<div class="progress-wrap">
    <svg class="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
        <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"></path>
    </svg>
</div>

<script src="<%=path%>/js/bootstrap.bundle.min.js"></script>
<script src="<%=path%>/js/swipper-bundle.min.js"></script>
<script src="<%=path%>/js/jquery.meanmenu.min.js"></script>
<script src="<%=path%>/js/wow.min.js"></script>
<script src="<%=path%>/js/jquery.nice-select.min.js"></script>
<script src="<%=path%>/js/jquery.scrollUp.min.js"></script>
<script src="<%=path%>/js/jquery.magnific-popup.min.js"></script>
<script src="<%=path%>/js/odometer.min.js"></script>
<script src="<%=path%>/js/appear.min.js"></script>
<script src="<%=path%>/js/datepicker.min.js"></script>
<script src="<%=path%>/js/select2.min.js"></script>
<script src="<%=path%>/js/cross2.min.js"></script>
<script src="<%=path%>/js/countdown.js"></script>
<script src="<%=path%>/js/jquery-ui-slider-range.js"></script>
<script src="<%=path%>/js/back-to-top.min.js"></script>
<script src="<%=path%>/js/main.js"></script>



</body>
</html>
