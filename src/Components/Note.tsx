import { Badge, Button, Col,  Container,  Row, Stack } from "react-bootstrap";
import { useNote } from "./NoteLayout";
import { Link, useNavigate } from "react-router-dom";
// import { ReactMarkdown } from "react-markdown/lib/react-markdown";
// import styles from "./Components/NoteList.module.css";
import ReactMarkdown from "react-markdown"
import styles from "./NoteList.module.css"

type NoteProps = {
    onDelete: (id: string) => void
}

export function Note({ onDelete }: NoteProps) {
    const note = useNote()
    const navigate = useNavigate()

    return <>
    <Container className={`${styles.notelist}`}>

        <Row className="align-item-center mb-4">
            <Col>
                <h1>{note.title}</h1>
                {note.tags.length > 0 && (
                    <Stack
                        gap={1}
                        direction="horizontal"
                        className=" flex-wrap "
                    >
                        {note.tags.map(tag => (
                            <Badge className={`text-truncate `} key={tag.id}>
                                {tag.label}
                            </Badge>
                        ))}
                    </Stack>
                )}
            </Col>
            <Col xs="auto">
                <Stack direction="horizontal" gap={2}>
                    <Link to={`/${note.id}/edit`}>
                        <Button variant="outline-success">Edit</Button>
                    </Link>
                    <Button
                        onClick={() => {
                            onDelete(note.id)
                            navigate("/")
                        }}
                        variant="outline-danger" >Delete</Button>

                    <Link to="/">
                        <Button variant="outline-secondary" >Back</Button>
                    </Link>

                </Stack>
            </Col>
        </Row>
        <ReactMarkdown>{note.markdown}</ReactMarkdown>
        </Container>

    </>
}
