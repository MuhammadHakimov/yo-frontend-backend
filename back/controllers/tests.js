import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const testsFile = path.join(
  __dirname,
  "../data/tests.js"
);

const readTestsFile = () => {
  const content = fs.readFileSync(testsFile, "utf-8");

  const match = content.match(
    /const\s+tests\s*=\s*([\s\S]*?);\s*export\s+default\s+tests/
  );

  if (!match) {
    throw new Error("Формати tests.js нодуруст аст");
  }

  return Function(`"use strict"; return (${match[1]})`)();
};

const writeTestsFile = (tests) => {
  const content = `const tests = ${JSON.stringify(
    tests,
    null,
    2
  )};

export default tests;
`;

  fs.writeFileSync(testsFile, content, "utf-8");
};

const flattenTests = (tests) => {
  const result = [];

  Object.entries(tests).forEach(
    ([technology, questions]) => {
      questions.forEach((question, index) => {
        result.push({
          id: `${technology.toLowerCase()}-${index + 1}`,
          technology,
          question: question.question,
          options: question.options,
          answer: question.answer,
          explanation: question.explanation || "",
        });
      });
    }
  );

  return result;
};

export const getAllTestsController = (req, res) => {
  try {
    const tests = readTestsFile();

    let result = flattenTests(tests);

    const { technology } = req.query;

    if (technology) {
      result = result.filter(
        (test) =>
          test.technology.toLowerCase() ===
          technology.toLowerCase()
      );
    }

    res.status(200).json(result);
  } catch (error) {
    console.error("Get tests error:", error);

    res.status(500).json({
      message: "Хатогӣ ҳангоми гирифтани тестҳо",
    });
  }
};

export const getTestByIdController = (req, res) => {
  try {
    const { id } = req.params;

    const tests = readTestsFile();
    const allTests = flattenTests(tests);

    const test = allTests.find(
      (item) => String(item.id) === String(id)
    );

    if (!test) {
      return res.status(404).json({
        message: "Тест ёфт нашуд",
      });
    }

    res.status(200).json(test);
  } catch (error) {
    console.error("Get test error:", error);

    res.status(500).json({
      message: "Хатогӣ ҳангоми гирифтани тест",
    });
  }
};

export const createTestController = (req, res) => {
  try {
    const {
      technology,
      question,
      options,
      answer,
      explanation,
    } = req.body;

    if (!technology) {
      return res.status(400).json({
        message: "Технология ҳатмист",
      });
    }

    if (!question) {
      return res.status(400).json({
        message: "Савол ҳатмист",
      });
    }

    if (!Array.isArray(options) || options.length === 0) {
      return res.status(400).json({
        message: "Ақаллан як вариант лозим аст",
      });
    }

    const tests = readTestsFile();

    if (!tests[technology]) {
      tests[technology] = [];
    }

    const newQuestion = {
      question,
      options,
      answer: Number(answer) || 0,
      explanation: explanation || "",
    };

    tests[technology].push(newQuestion);

    writeTestsFile(tests);

    const index = tests[technology].length - 1;

    res.status(201).json({
      message: "Тест бомуваффақият илова шуд",
      test: {
        id: `${technology.toLowerCase()}-${index + 1}`,
        technology,
        ...newQuestion,
      },
    });
  } catch (error) {
    console.error("Create test error:", error);

    res.status(500).json({
      message: "Хатогӣ ҳангоми илова кардани тест",
    });
  }
};

export const updateTestController = (req, res) => {
  try {
    const { id } = req.params;

    const {
      technology,
      question,
      options,
      answer,
      explanation,
    } = req.body;

    if (!technology) {
      return res.status(400).json({
        message: "Технология ҳатмист",
      });
    }

    if (!question) {
      return res.status(400).json({
        message: "Савол ҳатмист",
      });
    }

    if (!Array.isArray(options) || options.length === 0) {
      return res.status(400).json({
        message: "Ақаллан як вариант лозим аст",
      });
    }

    const tests = readTestsFile();

    const allTests = flattenTests(tests);

    const oldTest = allTests.find(
      (test) => String(test.id) === String(id)
    );

    if (!oldTest) {
      return res.status(404).json({
        message: "Тест ёфт нашуд",
      });
    }

    const oldTechnology = oldTest.technology;

    const oldIndex = tests[oldTechnology].findIndex(
      (item) =>
        item.question === oldTest.question &&
        JSON.stringify(item.options) ===
          JSON.stringify(oldTest.options)
    );

    if (oldIndex === -1) {
      return res.status(404).json({
        message: "Тест ёфт нашуд",
      });
    }

    const updatedQuestion = {
      question,
      options,
      answer: Number(answer) || 0,
      explanation: explanation || "",
    };

    if (oldTechnology === technology) {
      tests[oldTechnology][oldIndex] = updatedQuestion;
    } else {
      tests[oldTechnology].splice(oldIndex, 1);

      if (!tests[technology]) {
        tests[technology] = [];
      }

      tests[technology].push(updatedQuestion);
    }

    writeTestsFile(tests);

    res.status(200).json({
      message: "Тест бомуваффақият таҳрир шуд",
      test: {
        technology,
        ...updatedQuestion,
      },
    });
  } catch (error) {
    console.error("Update test error:", error);

    res.status(500).json({
      message: "Хатогӣ ҳангоми таҳрири тест",
    });
  }
};

export const deleteTestController = (req, res) => {
  try {
    const { id } = req.params;

    const tests = readTestsFile();
    const allTests = flattenTests(tests);

    const test = allTests.find(
      (item) => String(item.id) === String(id)
    );

    if (!test) {
      return res.status(404).json({
        message: "Тест ёфт нашуд",
      });
    }

    const technologyTests = tests[test.technology];

    const index = technologyTests.findIndex(
      (item) =>
        item.question === test.question &&
        JSON.stringify(item.options) ===
          JSON.stringify(test.options)
    );

    if (index === -1) {
      return res.status(404).json({
        message: "Тест ёфт нашуд",
      });
    }

    technologyTests.splice(index, 1);

    writeTestsFile(tests);

    res.status(200).json({
      message: "Тест бомуваффақият нест карда шуд",
    });
  } catch (error) {
    console.error("Delete test error:", error);

    res.status(500).json({
      message: "Хатогӣ ҳангоми нест кардани тест",
    });
  }
};      