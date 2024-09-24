import {
  Badge,
  Center,
  Group,
  List,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from "@mantine/core";
import { useState } from "react";
import { FiCheck, FiPlay, FiX } from "react-icons/fi";

export default function DebugInfo({ data }) {
  console.log(data);
  return (
    <Stack w={"300"}>
      <Group>
        <Text size="lg" fw={700} c={"red"}>
          Error at line {data[0].line}
        </Text>
      </Group>
      <Group>
        <Text size="lg" fw={700} c={"grape"}>
          Fix:
        </Text>
        <Text>{data[0].fix}</Text>
      </Group>
      <Group>
        <Text size="lg" fw={700} c={"teal"}>
          Explanation:
        </Text>
        <Text>{data[0].explanation}</Text>
      </Group>
      <Group>
        <Text size="lg" fw={700} c={"green"}>
          Learn:
        </Text>
        <Text style={{ wordBreak: "break-all" }}>
          {data[0].online_resource}
        </Text>
      </Group>
    </Stack>
  );
}
