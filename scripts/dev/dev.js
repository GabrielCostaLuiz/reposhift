const { execSync } = require("child_process");

// Inicializa os serviços
console.log("Iniciando serviços...");
try {
  execSync("pnpm run services:up", { stdio: "inherit" });
} catch (err) {
  console.error("Erro ao iniciar os serviços:", err.message);
  process.exit(1); // Sai do processo com erro
}

// Captura o sinal de interrupção (Ctrl + C) para encerrar os serviços
process.on("SIGINT", () => {
  console.log("\nFinalizando serviços...");
  try {
    execSync("pnpm run services:stop", { stdio: "inherit" });
    console.log("Serviços finalizados com sucesso!");
  } catch (err) {
    console.error("Erro ao finalizar serviços:", err.message);
  }
  process.exit(0); // Sai do processo com sucesso
});

// Executa o servidor de desenvolvimento (turbo dev)
try {
  execSync("turbo dev", { stdio: "inherit" });
} catch (err) {
  console.error("Erro ao executar o servidor de desenvolvimento:", err.message);
} finally {
  // Finaliza os serviços mesmo que o servidor falhe
  console.log("\nFinalizando serviços devido a erro...");
  try {
    execSync("pnpm run services:stop", { stdio: "inherit" });
    console.log("Serviços finalizados com sucesso!");
  } catch (stopError) {
    console.error("Erro ao finalizar serviços:", stopError.message);
  }
  process.exit(1); // Sai do processo com erro
}
