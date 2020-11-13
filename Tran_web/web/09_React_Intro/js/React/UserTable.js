const UserTable = ( {list} ) => {
    return (
            <div className="reactUserTable">
                <table>
                    <thead>
                        <tr>
                            <th>Email</th>
                            <th>Image</th>
                            <th>Birthday</th>
                            <th className="textAlignRight">Membership Fee</th>                           
                        </tr>
                    </thead>
                    <tbody>
                        {
                            list.map(listObj =>
                        <tr key={listObj.webUserId}>
                            <td>{listObj.userEmail}</td>
                            <td  className="shadowImage"><img src={listObj.image}/></td>
                            <td>{listObj.birthday}</td>
                            <td className="textAlignRight">{listObj.membershipFee}</td>                       
                        </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
            );
};