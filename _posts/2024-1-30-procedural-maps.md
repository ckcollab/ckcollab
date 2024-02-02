---
title: Procedural Maps
date: 2024-1-30 00:00:00 +0800
author: Harvey
---

# Technical Dive into Procedural Room Generation and Connection in Maps

In this post, we explore the technical aspects of generating and connecting rooms procedurally within a map, a key
technique in game development and simulations to create dynamic and varied environments.

# Procedural Generation: An Overview

Procedural generation refers to the algorithmic creation of data with randomness, widely used for generating maps in
games. This method allows for a high degree of variability, ensuring that each map is unique. The core principle
involves using algorithms and randomness to layout elements like rooms, corridors, and obstacles.

# Initializing the Map

The first step in our procedural generation process is initializing the map with a base tile, typically representing the
ground:

```py
def init_map(initial_tile=TILE_TYPES['Ground']):
    matrix = np.full((MAP_SIZE, MAP_SIZE, MAP_DEPTH), 0)
    for x in range(MAP_SIZE):
        for y in range(MAP_SIZE):
            place_tile(matrix, initial_tile, [y, x])
    return matrix
```

This function creates a 3D NumPy array representing our map, filling it with an initial tile type, ensuring we have a
starting point for adding more complex structures.

# Room Generation

Rooms are generated using the create_rooms function, which randomly determines their number, size, and position:

```py
def create_rooms(game_map, num_rooms, obstruction_tile, ground_tile, local_rand):
    rooms = []
    for _ in range(num_rooms):
        rooms.append(create_room(game_map, local_rand, obstruction_tile))
    solve_room_overlap(game_map, rooms, ground_tile)
    rooms = connect_rooms(game_map, rooms, obstruction_tile, ground_tile)
    return rooms
```

Each room is created and placed on the map ensuring it fits within the map boundaries. The create_room function is
responsible for the specifics of each room's dimensions and location.

# Handling Room Overlaps

<div>
The solve_room_overlap function addresses any overlaps between rooms, adjusting their positions or modifying walls to ensure each room is distinct. without these overlaps we would end up with many occurances of rooms that look like so:
</div>
<div style="text-align: center;">
<img src="/assets/blog/2024-01-30/overlaps.png" class="img-bordered" alt="overlaps"/>
</div>

```py
def solve_room_overlap(game_map, rooms, tile_type):
    for i, room1 in enumerate(rooms):
        for room2 in rooms[i + 1:]:
            if rooms_overlap(room1, room2):
                remove_internal_walls(game_map, room1, room2, tile_type)

```

by removing the overlapping internal walls, we end up with something that makes sense
<div style="text-align: center;">
<img src="/assets/blog/2024-01-30/overlap_solved.png" class="img-bordered" alt="overlaps_solved"/>
</div>

# Connecting Rooms

The connect_rooms function weaves the rooms together by creating corridors or paths, making the map navigable:
<div style="text-align: center;">
<img src="/assets/blog/2024-01-30/connected_overlap_solved.png" class="img-bordered" alt="overlaps"/>
</div>

```py
def connect_rooms(game_map, rooms, wall_tile, ground_tile):
    while len(rooms) > 1:
        room = rooms.pop(0)
        closest_room = find_closest_room(room, rooms)
        if closest_room:
            create_hallway(game_map, room, closest_room, wall_tile, ground_tile)
    return rooms
```

This function ensures each room is connected to at least one other room, using the create_hallway function to lay down
the paths.

# Conclusion
Through this technical exploration, we've seen how procedural generation can be harnessed to create complex and varied
map layouts with interconnected rooms. This process, from initialization to visualization, showcases the power of
algorithmic content creation in crafting immersive game environments.

This example scratches the barest posibilities of what can be done with procedural generation.
