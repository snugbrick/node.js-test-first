#include <cmath>
#include <iostream>

namespace testCpp {
int namespaceTest() {
  std::cout << "hi" << std::endl;

  return 1;
}
} // namespace testCpp

int returnInt(int);

int main() {
  using namespace std;

  const int backNum = testCpp::namespaceTest();
  cout << backNum << endl;

  cout << sqrt(4) << endl;

  return 0;
}

int returnInt(int a) { return a; }
