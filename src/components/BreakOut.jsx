import React, { useEffect, useRef, useState } from "react";

const BreakoutGame = () => {
  const canvasRef = useRef(null);
  const [currentLevel, setCurrentLevel] = useState(1);

  const levels = {
    1: [
      [],
      [],
      [],
      [],
      [],
      [],
      ["", "", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "", ""],
      ["", "", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "", ""],
      ["", "", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "", ""],
      ["", "", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "", ""],
      ["", "", "G", "G", "G", "G", "G", "G", "G", "G", "G", "G", "", ""],
      ["", "", "G", "G", "G", "G", "G", "G", "G", "G", "G", "G", "", ""],
      ["", "", "Y", "Y", "Y", "Y", "Y", "Y", "Y", "Y", "Y", "Y", "", ""],
      ["", "", "Y", "Y", "Y", "Y", "Y", "Y", "Y", "Y", "Y", "Y", "", ""],
    ],
    2: [
      [],
      [],
      [],
      ["", "", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B", "", ""],
      ["", "", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "", ""],
      ["", "", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "", ""],
      ["", "", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "", ""],
      ["", "", "G", "G", "G", "G", "G", "G", "G", "G", "G", "G", "", ""],
      ["", "", "Y", "Y", "Y", "Y", "Y", "Y", "Y", "Y", "Y", "Y", "", ""],
    ],
    3: [
      [],
      [],
      ["R", "", "R", "", "R", "", "R", "", "R", "", "R", "", "R", ""],
      ["", "O", "", "O", "", "O", "", "O", "", "O", "", "O", "", "O"],
      ["G", "", "G", "", "G", "", "G", "", "G", "", "G", "", "G", ""],
      ["", "Y", "", "Y", "", "Y", "", "Y", "", "Y", "", "Y", "", "Y"],
      ["P", "", "P", "", "P", "", "P", "", "P", "", "P", "", "P", ""],
      ["", "B", "", "B", "", "B", "", "B", "", "B", "", "B", "", "B"],
    ],
    4: [
      [],
      ["R", "R", "R", "R", "", "", "", "", "", "", "R", "R", "R", "R"],
      ["R", "R", "R", "", "", "", "", "", "", "", "", "R", "R", "R"],
      ["R", "R", "", "", "", "G", "G", "G", "G", "", "", "", "R", "R"],
      ["R", "", "", "", "G", "G", "G", "G", "G", "G", "", "", "", "R"],
      ["", "", "", "G", "G", "G", "G", "G", "G", "G", "G", "", "", ""],
      ["", "", "G", "G", "G", "Y", "Y", "Y", "Y", "G", "G", "G", "", ""],
      ["", "G", "G", "G", "G", "Y", "Y", "Y", "Y", "G", "G", "G", "G", ""],
      ["G", "G", "G", "G", "G", "G", "G", "G", "G", "G", "G", "G", "G", "G"],
    ],
  };

  const colorMap = {
    R: "red",
    O: "orange",
    G: "green",
    Y: "yellow",
    B: "blue",
    P: "purple",
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    const brickGap = 4;
    const brickWidth = 25;
    const brickHeight = 12;
    const wallSize = 1;
    const bricks = [];

    // Create bricks for current level
    const currentLevelData = levels[currentLevel];
    for (let row = 0; row < currentLevelData.length; row++) {
      for (let col = 0; col < currentLevelData[row].length; col++) {
        const colorCode = currentLevelData[row][col];
        if (colorCode) {
          bricks.push({
            x: wallSize + (brickWidth + brickGap) * col,
            y: wallSize + (brickHeight + brickGap) * row,
            color: colorMap[colorCode],
            width: brickWidth,
            height: brickHeight,
          });
        }
      }
    }

    const paddle = {
      x: canvas.width / 2 - brickWidth / 2,
      y: 440,
      width: brickWidth + 60,
      height: brickHeight,
      dx: 0,
    };

    const ball = {
      x: 130,
      y: 260,
      width: 10,
      height: 10,
      speed: 2,
      dx: 0,
      dy: 0,
    };

    function collides(obj1, obj2) {
      return (
        obj1.x < obj2.x + obj2.width &&
        obj1.x + obj1.width > obj2.x &&
        obj1.y < obj2.y + obj2.height &&
        obj1.y + obj1.height > obj2.y
      );
    }

    function loop() {
      requestAnimationFrame(loop);
      context.clearRect(0, 0, canvas.width, canvas.height);

      // Move paddle
      paddle.x += paddle.dx;
      if (paddle.x < wallSize) {
        paddle.x = wallSize;
      } else if (paddle.x + paddle.width > canvas.width - wallSize) {
        paddle.x = canvas.width - wallSize - paddle.width;
      }

      // Move ball
      ball.x += ball.dx;
      ball.y += ball.dy;

      // Ball collision with walls
      if (ball.x < wallSize) {
        ball.x = wallSize;
        ball.dx *= -1;
      } else if (ball.x + ball.width > canvas.width - wallSize) {
        ball.x = canvas.width - wallSize - ball.width;
        ball.dx *= -1;
      }
      if (ball.y < wallSize) {
        ball.y = wallSize;
        ball.dy *= -1;
      }

      // Reset ball if it goes below screen
      if (ball.y > canvas.height) {
        ball.x = 130;
        ball.y = 260;
        ball.dx = 0;
        ball.dy = 0;
      }

      // Ball collision with paddle
      if (collides(ball, paddle)) {
        ball.dy *= -1;
        ball.y = paddle.y - ball.height;
      }

      // Ball collision with bricks
      for (let i = 0; i < bricks.length; i++) {
        const brick = bricks[i];
        if (collides(ball, brick)) {
          bricks.splice(i, 1);

          if (
            ball.y + ball.height - ball.speed <= brick.y ||
            ball.y >= brick.y + brick.height - ball.speed
          ) {
            ball.dy *= -1;
          } else {
            ball.dx *= -1;
          }

          // Check if level is completed
          if (bricks.length === 0) {
            if (currentLevel < Object.keys(levels).length) {
              setCurrentLevel((prev) => prev + 1);
              ball.dx = 0;
              ball.dy = 0;
              ball.x = 130;
              ball.y = 260;
            }
          }
          break;
        }
      }

      // Draw walls
      context.fillStyle = "#fed7aa";
      context.fillRect(0, 0, canvas.width, wallSize);
      context.fillRect(0, 0, wallSize, canvas.height);
      context.fillRect(canvas.width - wallSize, 0, wallSize, canvas.height);

      // Draw ball
      if (ball.dx || ball.dy) {
        context.fillStyle = "#fed7aa";
        context.fillRect(ball.x, ball.y, ball.width, ball.height);
      }

      // Draw bricks
      bricks.forEach((brick) => {
        context.fillStyle = brick.color;
        context.fillRect(brick.x, brick.y, brick.width, brick.height);
      });

      // Draw paddle
      context.fillStyle = "#fed7aa";
      context.fillRect(paddle.x, paddle.y, paddle.width, paddle.height);

      // Draw level indicator
      context.fillStyle = "#000";
      context.font = "20px Arial";
      context.fillText(`Level ${currentLevel}`, 10, 490);
    }

    // Keyboard controls
    function handleKeyDown(e) {
      if (e.key === "ArrowLeft") {
        paddle.dx = -5;
      } else if (e.key === "ArrowRight") {
        paddle.dx = 5;
      }

      if (ball.dx === 0 && ball.dy === 0 && e.key === "Enter") {
        ball.dx = ball.speed;
        ball.dy = ball.speed;
      }
    }

    function handleKeyUp(e) {
      if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
        paddle.dx = 0;
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);

    requestAnimationFrame(loop);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, [currentLevel]);

  return (
    
      <canvas
        ref={canvasRef}
        width="400"
        height="500"
        className="border border-gray-300"
      ></canvas>
    
  );
};

export default BreakoutGame;
