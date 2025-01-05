// try...catch...finally
const user = null;
try {
  console.log(`Hi, ${user.username}`);
} catch {
  console.log("Enter Proper username");
} finally {
  console.log("Once name entered we will proceed");
}

// throw statement - validate age

function validateAge(age) {
  if (age < 18) {
    throw new Error("Age must be 18 or older.");
  } else {
    return `valid age!`;
  }
}

try {
  console.log(validateAge(18));
} catch (error) {
  console.error(error.message);
}

const username = "Kunal";

try {
  if (!username) {
    throw new Error("Username invalid");
  }
  console.log(`username is ${username}`);
} catch (error) {
  console.error(error.message);
} finally {
  if (!username) {
    console.log("Enter the proper username to proceed");
  } else {
    console.log(`Welcome ${username}`);
  }
}
