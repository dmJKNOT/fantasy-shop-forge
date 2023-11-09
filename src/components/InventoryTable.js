import {useChatContext} from "../context/ChatContext";

export function InventoryTable() {

    const { chatData } = useChatContext();

    return (
        <div>
            {chatData && chatData.length > 0 &&
                <table className="table table-bordered table-striped table-hover">
                    <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Cost</th>
                        <th scope="col">Rarity</th>
                        <th scope="col">Effects</th>
                        <th scope="col">Requirements</th>
                    </tr>
                    </thead>
                    <tbody>
                    {chatData.map(item =>
                        <tr key={item.name}>
                            <th scope="row">{item.name}</th>
                            <td>{item.Cost}</td>
                            <td>{item.Rarity}</td>
                            <td>{item.Effects}</td>
                            <td>{item.Requirements}</td>
                        </tr>
                    )}
                    </tbody>
            </table>}
        </div>
    );
}