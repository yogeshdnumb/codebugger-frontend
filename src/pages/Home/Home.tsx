//import classes from "./Home.module.scss";
import {
  ActionIcon,
  Box,
  Center,
  Stack,
  Image,
  Button,
  Pill,
  Badge,
  Group,
  Text,
} from "@mantine/core";
import DebugInfo from "@src/features/Layout/DebugInfo/DebugInfo";
import axios from "axios";
import { useState } from "react";
import { FiPlusCircle } from "react-icons/fi";

export default function Home() {
  const [imgFiles, setImgFiles] = useState();
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);

  const [pending, setPending] = useState(false);

  if (error) {
    return <Text>{error}</Text>;
  }
  return (
    <Stack align="center" gap={"lg"}>
      {imgFiles ? (
        <Stack>
          <Image
            // h={500}
            // w={"auto"}
            src={URL.createObjectURL(imgFiles[0])}
            onLoad={() => {
              URL.revokeObjectURL(URL.revokeObjectURL(imgFiles[0]));
            }}
          ></Image>
          <Button
            onClick={async () => {
              // console.log(imgFiles[0]);

              const formData = new FormData();
              formData.append("img", imgFiles[0]);

              try {
                const response = await fetch(
                  import.meta.env.VITE_BACKEND_URL + "/upload",
                  {
                    method: "post",
                    body: formData,
                  }
                );

                const data = await response.json();
                // console.log(data);
                setData(data);
              } catch (error) {
                // console.log(error);
                setError(error.message);
              }
            }}
          >
            Submit!
          </Button>
          {data && <DebugInfo data={data}></DebugInfo>}
        </Stack>
      ) : (
        <Stack h={"300"} align="center" justify="center">
          <label htmlFor="img-input">
            <Center>
              <FiPlusCircle size={"150"} />
            </Center>
          </label>
          <input
            accept="image/*;capture=camera"
            type="file"
            name=""
            id="img-input"
            style={{ display: "none" }}
            onChange={(e) => {
              // console.log(e.currentTarget.files);

              setImgFiles(e.currentTarget.files);
            }}
          />
        </Stack>
      )}
    </Stack>
  );
}
