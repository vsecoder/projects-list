import { ProjectCard } from "../components/Card";
import useSWR from 'swr';
import { Data, DataError } from "../interfaces";
import { Container, Text } from "@mantine/core";
import Link from "next/link";


const fetcher = async (url: string) => {
  const res = await fetch(url)
  const data = await res.json()

  if (res.status !== 200) {
    throw new Error(data.message)
  }
  return data
}


export default function IndexPage() {
  const { data, error, isLoading, isValidating } = useSWR<
    Data,
    DataError
  >(() => '/api/projects', fetcher)

  if (error) return <div>Server Error</div>;

  return (
    <>
      {isValidating || isLoading ? (
        <div>Loading...</div>
      ) : (
        <Container size={1300} style={{ textAlign: 'center' }}>
          {data?.map((project) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              img={project.img}
              name={project.name}
              now_status={project.now_status}
              description={project.description}
              link={project.link}
              badges={project.badges}
            />
          ))}
        </Container>
      )}
      <Text align="center" mt="lg">
        <Link href="/api/projects">Link to API</Link>
      </Text>
    </>
  );
}
