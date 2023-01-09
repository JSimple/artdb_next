import { NextPage } from 'next'
import Table from 'react-bootstrap/Table'
import Upload from './upload'


const Index: NextPage = () =>{
    return (
        <div>
            <Upload/>
            <Table responsive striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Thumbnail</th>
                        <th>Title</th>
                    </tr>
                </thead>
            </Table>
        </div>
    )

}

export default Index