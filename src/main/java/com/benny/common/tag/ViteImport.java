package com.benny.common.tag;

import com.benny.service.AppService;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.servlet.ServletContext;
import jakarta.servlet.jsp.JspWriter;
import jakarta.servlet.jsp.PageContext;
import jakarta.servlet.jsp.tagext.SimpleTagSupport;
import java.io.File;
import java.io.IOException;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.web.context.WebApplicationContext;
import org.springframework.web.context.support.WebApplicationContextUtils;

public class ViteImport extends SimpleTagSupport {

    private static final Log log = LogFactory.getLog(ViteImport.class);
    private String entry;

    public void setEntry(String entry) {
        this.entry = entry;
    }

    @Override
    public void doTag() throws IOException {
        ServletContext servletContext = ((PageContext) getJspContext()).getServletContext();
        WebApplicationContext ctx = WebApplicationContextUtils.getWebApplicationContext(servletContext);

        if (ctx == null) {
            return;
        }

        AppService appService = ctx.getBean(AppService.class);
        JspWriter out = getJspContext().getOut();
        String env = appService.getEnv();

        switch (env) {
            case "prod": {
                String manifestPath = ((PageContext) getJspContext()).getServletContext().getRealPath("/WEB-INF/dist/.vite/manifest.json");
                File manifestFile = new File(manifestPath);

                if (manifestFile.exists()) {
                    ObjectMapper mapper = new ObjectMapper();
                    JsonNode manifest = mapper.readTree(manifestFile);
                    JsonNode entry = manifest.get(this.entry);

                    if (entry != null) {
                        String jsFile = entry.get("file").asText();
                        String pageContextPath = ((PageContext) getJspContext()).getServletContext().getContextPath();
                        out.print("<script type=\"module\" src=\"" + pageContextPath + "/resources/" + jsFile + "\" defer></script>");

                        JsonNode cssFiles = entry.get("css");
                        if (cssFiles != null) {
                            for (JsonNode cssFile : cssFiles) {
                                out.print("<link rel=\"stylesheet\" href=\"" + pageContextPath + "/resources/" + cssFile.asText() + "\"/>");
                            }
                        }
                    }
                }
                break;
            }

            case "dev":
            default:
                out.print("<script type=\"module\" src=\"http://localhost:5173/@vite/client\" defer></script>");
                out.print("<script type=\"module\" src=\"http://localhost:5173/" + entry + "\" defer></script>");
        }
    }

}
