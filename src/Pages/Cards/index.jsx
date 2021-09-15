const Cards = ({registeredUsers}) => {
    return (
            registeredUsers.length > 0 ? (
                <table>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Sobrenome</th>
                            <th>Email</th>
                            <th>Gênero</th>
                        </tr>
                    </thead>
                {registeredUsers.map(({name, surname, gender, email}, index) => {
                    return (
                        <tbody key={index}>
                            <tr>
                                <td>{name}</td>
                                <td>{surname}</td>
                                <td>{email}</td>
                                <td>{gender}</td>
                            </tr>
                        </tbody>
                    )  
                })}
                </table>
            ) : <h4>Não há cadastros a serem exibidos</h4>
    )
}

export default Cards;