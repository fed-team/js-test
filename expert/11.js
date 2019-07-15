const isWristband = arr => {

}

test(isWristband([
    ['A', 'A'], 
    ['B', 'B'], 
    ['C', 'C']
]), true)

test(isWristband([
    ['A', 'B'], 
    ['A', 'B'], 
    ['A', 'B']
]), true)

test(isWristband([
    ['A', 'B', 'C'], 
    ['C', 'A', 'B'], 
    ['B', 'C', 'A'], 
    ['A', 'B', 'C']
]), true)

test(isWristband([
    ['A', 'B', 'C'], 
    ['C', 'A', 'B'], 
    ['D', 'C', 'A'], 
    ['E', 'D', 'C']
]), true)

test(isWristband([
    ['A', 'B', 'C'], 
    ['B', 'A', 'B'], 
    ['D', 'C', 'A'], 
    ['E', 'D', 'C']
]), false)

test(isWristband([
    ['A', 'B', 'C'], 
    ['B', 'C', 'A'], 
    ['C', 'A', 'B'], 
    ['A', 'B', 'A']
]), true)

test(isWristband([
    ['A', 'B', 'C'], 
    ['B', 'C', 'D'], 
    ['C', 'D', 'E'], 
    ['D', 'E', 'F']
]), true)

test(isWristband([
    ['A', 'B', 'C'], 
    ['B', 'C', 'D'], 
    ['C', 'D', 'E'], 
    ['D', 'E', 'E']
]), true)

test(isWristband([
    ['A', 'B', 'C'], 
    ['B', 'C', 'D'], 
    ['C', 'D', 'E'], 
    ['D', 'F', 'E']
]), false)

test(isWristband([
    ['A', 'B', 'C'], 
    ['B', 'D', 'A'], 
    ['C', 'A', 'B'], 
    ['A', 'B', 'A']
]), false)

test(isWristband([
    ['A', 'B'],  
    ['A', 'B'], 
    ['A', 'C'],  
    ['A', 'B']
]), false)

test(isWristband([
    ['A', 'A'],  
    ['B', 'B'], 
    ['C', 'C'],  
    ['D', 'B']
]), false)

test(isWristband([
    ['A', 'A'],  
    ['B', 'B'], 
    ['C', 'C'],  
    ['C', 'C']
]), true)