import {  useState } from 'react'
import { Button } from './components/Button'
import { globalStyles } from './theme'
import { Flex } from './components/Flex'
import { Joke } from './types'
import { Spinner } from './components/Spinner'
import { Box } from './components/Box'

function App() {
  globalStyles();

  const link = import.meta.env.VITE_API_BASE_URL;
  const apiDocs = import.meta.env.VITE_API_DOCS_URL;
  const [showPunchLine, setShowPunchLine] = useState(false)
  const [joke, setJoke] = useState<Joke | null>(null);
  const [loading, setLoading] = useState<boolean>(false);


  // Function to fetch data
  const fetchData = async (): Promise<Joke> => {
    const response = await fetch(link);
    const data: Joke = await response.json();
    return data;
  };

  // Function to handle click event
  const getJoke = async () => {
    setLoading(true);
    const joke = await fetchData()
    setJoke(joke);
    setLoading(false);
  };

  return (
    <Box css={{ maxWidth:"90%", m: "0 auto","@lg":{
      maxWidth:"60%"
    } }}>
      <Flex css={{ pt: "3rem" }} justify={"between"} align={"center"}>
        <Button disabled={loading} onClick={getJoke}>
          Get a new random joke
        </Button>
        <a href={apiDocs} target='_blank'>View API Docs</a>
      </Flex>
      { loading  ? (
        <Box css={{ p: "5rem 0" }}>
          Loading your joke
          <Spinner variant="inherit" />
        </Box>
      ) : (
        <>
          <Box as={"p"} css={{ p: "5rem 0" }}>
            {joke?.joke}
          </Box>
         {joke && <Button color={"secondary"} onClick={() => setShowPunchLine(!showPunchLine)}>
            {showPunchLine ? "Hide punchline" : "Show punchline"}
          </Button>}
          {showPunchLine && <Box as={"p"} css={{ pt: "3rem", textAlign: "right" }}>
            {joke?.punchLine}
          </Box>}
        </>
      )}
    </Box>
  )
}

export default App
