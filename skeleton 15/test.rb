def two_sum(arr)
  arr2 = []

  (0..arr.length - 1).each do |idx1|
    (idx1..arr.length-1).each do |idx2|
      if arr[idx1] + arr[idx2] == 0
        arr2 << [idx1, idx2]
      end
    end
  end
  arr2
end

# p two_sum([-1, -3, 3, 4, 5, 1])

def transpose(arr)
  height = arr.length #3
  width = arr.first.length #2
  arr1 = Array.new(width) {[0] * height}

  (0...width).each do |row|
    (0...height).each do |col|
      arr1[row][col] = arr[col][row]
    end
  end

  arr1
end


p transpose([[1,0],[2,3],[4,5]])
# [1,2,4] [0,3,5]