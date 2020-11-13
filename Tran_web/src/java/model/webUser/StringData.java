package model.webUser;

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

    public String webUserId = "";
    public String userEmail = "";
    public String userPassword = "";
    public String image = "";
    public String birthday = "";
    public String membershipFee = "";

    public String errorMsg = "";

    // default constructor leaves all data members with empty string (Nothing null).
    public StringData() {
    }

    // overloaded constructor sets all data members by extracting from resultSet.
    public StringData(ResultSet results) {
        try {
            this.webUserId = FormatUtils.formatInteger(results.getObject("web_user_id"));
            this.userEmail = FormatUtils.formatString(results.getObject("user_email"));
            this.userPassword = FormatUtils.formatString(results.getObject("user_password"));
            this.image = FormatUtils.formatString(results.getObject("image"));
            this.birthday = FormatUtils.formatDate(results.getObject("birthday"));
            this.membershipFee = FormatUtils.formatDollar(results.getObject("membership_fee"));
        } catch (Exception e) {
            this.errorMsg = "Exception thrown in model.webUser.StringData (the constructor that takes a ResultSet): " + e.getMessage();
        }
    }

    public int getCharacterCount() {
        String s = this.webUserId + this.userEmail + this.userPassword + this.image + this.birthday
                + this.membershipFee;
        return s.length();
    }

    public String toString() {
        return "Web User Id:" + this.webUserId
                + ", User Email: " + this.userEmail
                + ", User Password: " + this.userPassword
                + ", Image: " + this.image
                + ", Birthday: " + this.birthday
                + ", Membership Fee: " + this.membershipFee;
    }
}
