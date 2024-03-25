#include <chrono>
#include <iostream>

void test(int);

int main() {
  auto start = std::chrono::high_resolution_clock::now();

  int a = 0;
  test(a);

  auto end = std::chrono::high_resolution_clock::now();
  std::chrono::duration<double> elapsed_time = end - start;
  std::cout << "Total running time: " << elapsed_time.count() << " seconds"
            << std::endl;
  return 0;
}
//462913
void test(int a) {
  std::cout << a << "of start" << std::endl;
  a++;
  if (a < 4) {
    test(a);
  }
  std::cout << a << "of end" << std::endl;
}