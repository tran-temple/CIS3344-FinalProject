const MuseumTable = ( {list} ) => {
    return (
            <div className="reactMuseumTable">
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Address</th>
                            <th>Image</th>
                            <th>Website</th>
                            <th className="textAlignRight">Year</th>
                            <th className="textAlignRight">Price</th>                          
                        </tr>
                    </thead>
                    <tbody>
                        {
                            list.map(listObj =>
                        <tr key={listObj.museumName}>
                            <td>{listObj.museumName}</td>
                            <td>{listObj.museumAddress}</td>
                            <td  className="shadowImage"><img src={listObj.image}/></td>
                            <td>{listObj.museumWebsite}</td>
                            <td className="textAlignRight">{listObj.museumYear}</td>
                            <td className="textAlignRight">{listObj.ticketPrice}</td>                            
                        </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
            );
};