<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ taglib uri="http://jsptags.com/tags/navigation/pager" prefix="pg" %> 
<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
 
  
 <body>
 <!--  
 <div>
共4条记录 1/1页
&nbsp;<a disabled="disabled">首页</a> <a disabled="disabled">上一页</a>&nbsp;<a disabled="disabled">下一页</a> <a disabled="disabled">尾页</a>
&nbsp;第0页
</div>	
-->



  <table width="95%" border="0" align="center" cellpadding="0" cellspacing="0" bgcolor="DCD9D2" style="border-bottom:#ffffff 4px solid">
        <tr> 
          <td align="right" valign="bottom" bgcolor="#FFFFFF" style="color:#A5537B;"> 
            
 	   <pg:page export="first,last">
                 ${currentPageNumber}/${pageTotal}页
      </pg:page>
        <pg:first export="pageUrl" >			
			    <c:if test="${pageUrl!=null }">
                     <A HREF="${pageUrl}"> <font color=A5537B> 首页</font>  </A>  
                </c:if>
               <c:if test="${pageUrl==null }">
                    <a disabled="disabled"><font color=A5537B>首页</font> </a>
                </c:if>
        </pg:first>
          <pg:prev export="pageUrl">
                <c:if test="${pageUrl!=null }">
                    <A HREF="${pageUrl}"><font color=A5537B>上一页</font> &nbsp;</A>
                </c:if>
        </pg:prev>
         <pg:next export="pageUrl">
           
                <c:if test="${pageUrl!=null }">
                    <A HREF="${pageUrl}"><font color=A5537B>下一页</font> </A>
                </c:if>
       
        </pg:next>
        <pg:last export="pageUrl">
        
                <c:if test="${pageUrl!=null }">
                    <A HREF="${pageUrl}"><font color=A5537B>尾页</font> </A>
                </c:if>
           
        </pg:last>
     <font color=ff0000><b>&nbsp;第${currentPageNumber}页</b></font>
            
          </td>
        </tr>
      </table>
      
      
      
</body>
</html>
