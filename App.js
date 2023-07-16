import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function App() {
  const [number, setNumber] = useState("");
  const [lastNumber, setLastNumber] = useState("");
  const buttonNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const buttonOperator = ["C", "+", "-", "*", "/", "="];
  const calculate = () => {
    let trans = eval(number).toString();
    setNumber(trans);
    return;
  };
  const result = (btn) => {
    switch (btn) {
      case "+" || "-" || "*" || "/":
        setNumber(number + btn);
        return;
      case "C":
        setLastNumber("");
        setNumber("");
        return;
      case "=":
        setLastNumber(number + "=");
        calculate();
        return;
    }
    setNumber(number + btn);
  };

  return (
    <View style={styles.container}>
      <View style={styles.result}>
        <Text style={styles.resultText}>
          {" "}
          {lastNumber} {number}{" "}
        </Text>
      </View>
      <View style={styles.buttons}>
        <View style={styles.numbers}>
          {buttonNumbers.map((item) => (
            <TouchableOpacity
              key={item}
              style={styles.numberButton}
              onPress={() => result(item)}
            >
              <Text style={styles.numberText}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.operators}>
          {buttonOperator.map((item) => (
            <TouchableOpacity
              key={item}
              style={styles.operatorButton}
              onPress={() => result(item)}
            >
              <Text style={styles.operatorText}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  result: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  resultText: {
    fontSize: 30,
    color: "white",
  },
  buttons: {
    flex: 1.5,
    flexDirection: "row",
  },
  numbers: {
    flex: 3.5,
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "#444",
    justifyContent: "center",
  },
  numberButton: {
    backgroundColor: "#444",
    padding: "14%",
  },
  numberText: {
    fontSize: 30,
    color: "white",
  },
  operators: {
    flex: 1,
    backgroundColor: "tomato",
  },
  operatorButton: {
    backgroundColor: "tomato",
    padding: "23.5%",
  },
  operatorText: {
    textAlign: "center",
    fontSize: 30,
    color: "white",
  },
});
