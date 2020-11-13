package view;

// classes imported from java.sql.*
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import model.museum.*;

// classes in my project
import dbUtils.*;

public class MuseumView {

    public static StringDataList getAllMuseums(DbConn dbc) {

        //PreparedStatement stmt = null;
        //ResultSet results = null;
        StringDataList sdl = new StringDataList();
        try {
            String sql = "SELECT museum_id, museum_name, address, image, website, museum_year, ticket_price "+
                    "FROM museum ORDER BY museum_name ";  // always order by something, not just random order.
            PreparedStatement stmt = dbc.getConn().prepareStatement(sql);
            ResultSet results = stmt.executeQuery();
            while (results.next()) {
                sdl.add(results);
            }
            results.close();
            stmt.close();
        } catch (Exception e) {
            StringData sd = new StringData();
            sd.errorMsg = "Exception thrown in MuseumView.getAllMuseums(): " + e.getMessage();
            sdl.add(sd);
        }
        return sdl;
    }

}