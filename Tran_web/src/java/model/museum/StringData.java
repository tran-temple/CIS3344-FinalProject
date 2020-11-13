package model.museum;

import dbUtils.FormatUtils;
import java.sql.ResultSet;


/* The purpose of this class is just to "bundle together" all the 
 * character data that the user might type in when they want to 
 * add a new Customer or edit an existing customer.  This String
 * data is "pre-validated" data, meaning they might have typed 
 * in a character string where a number was expected.
 * 
 * There are no getter or setter methods since we are not trying to
 * protect this data in any way.  We want to let the JSP page have
 * free access to put data in or take it out. */
public class StringData {

    public String museumId = "";
    public String museumName = "";
    public String museumAddress = "";
    public String image = "";
    public String museumWebsite = "";
    public String museumYear = "";
    public String ticketPrice = "";    

    public String errorMsg = "";

    // default constructor leaves all data members with empty string (Nothing null).
    public StringData() {
    }

    // overloaded constructor sets all data members by extracting from resultSet.
    public StringData(ResultSet results) {
        try {
            this.museumId = FormatUtils.formatInteger(results.getObject("museum_id"));
            this.museumName = FormatUtils.formatString(results.getObject("museum_name"));
            this.museumAddress = FormatUtils.formatString(results.getObject("address"));
            this.image = FormatUtils.formatString(results.getObject("image"));
            this.museumWebsite = FormatUtils.formatString(results.getObject("website"));
            this.museumYear = FormatUtils.formatYear(results.getObject("museum_year"));            
            this.ticketPrice = FormatUtils.formatDollar(results.getObject("ticket_price"));
        } catch (Exception e) {
            this.errorMsg = "Exception thrown in model.museum.StringData (the constructor that takes a ResultSet): " + e.getMessage();
        }
    }

    public int getCharacterCount() {
        String s = this.museumId + this.museumName + this.museumAddress + this.image + this.museumWebsite
                + this.museumYear + this.ticketPrice;
        return s.length();
    }

    public String toString() {
        return "Museum Id:" + this.museumId
                + ", Museum Name: " + this.museumName
                + ", Address: " + this.museumAddress
                + ", Image: " + this.image
                + ", Website: " + this.museumWebsite
                + ", Established Year: " + this.museumYear
                + ", Ticket Price for Adults: " + this.ticketPrice;
    }

}
