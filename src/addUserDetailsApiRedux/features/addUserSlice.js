import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Create action
export const createUser = createAsyncThunk(
  "createUser",
  async (data, { rejectWithValue }) => {
    try {
      const response = await fetch(
        "https://678b7a3d1a6b89b27a2a7de4.mockapi.io/crud",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to create user");
      }

      const result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

//read action
export const showUser = createAsyncThunk(
  "showUser",
  async (_, { rejectWithValue }) => { // Use `_` for the first unused argument
    try {
      const response = await fetch("https://678b7a3d1a6b89b27a2a7de4.mockapi.io/crud");

      if (!response.ok) {
        throw new Error("Failed to fetch users");
      }

      const result = await response.json();
      console.log(result);
      
      return result;
    } catch (error) {
      return rejectWithValue(error.message); // Return the error message
    }
  }
);

//read action
export const deleteUser = createAsyncThunk(
  "deleteUser",
  async (id, { rejectWithValue }) => { // Use `_` for the first unused argument
    try {
      const response = await fetch(`https://678b7a3d1a6b89b27a2a7de4.mockapi.io/crud/${id}`,{method:"Delete"});

      if (!response.ok) {
        throw new Error("Failed to fetch users");
      }

      const result = await response.json();
      console.log(result);
      
      return result;
    } catch (error) {
      return rejectWithValue(error.message); // Return the error message
    }
  }
);

// /update user
export const updateUser = createAsyncThunk(
  "updateUser",
  async (data, { rejectWithValue }) => {
    console.table("updated",data);
    
    try {
      const response = await fetch(
       `https://678b7a3d1a6b89b27a2a7de4.mockapi.io/crud/${data.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to create user");
      }

      const result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);


export const userDetails = createSlice({
  name: "userDetails",
  initialState: {
    users: [],
    loading: false,
    error: null,
    searchData: [],
  },
  reducers: {
    searchUser: (state, action) => {
      console.log(action.payload);
      state.searchData = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users.push(action.payload);
      })
      .addCase(createUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; // Error message will be here
      })
      .addCase(showUser.pending,state=>{
        state.loading=true
        state.error=false
      })
      .addCase(showUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users=(action.payload);
      })
      .addCase(showUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; // Error message will be here
      })
      .addCase(deleteUser.pending,state=>{
        state.loading=true
       
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.loading = false;
        // state.users=(action.payload);
        const {id}=action.payload
        if(id){
          state.users=state.users.filter(val=>val.id!==id)
        }
        console.log("action",action.payload);
        
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; // Error message will be here
      })
      .addCase(updateUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.loading = false;
        // state.users.push(action.payload);
        state.users=state.users.map(val=>
          val.id===action.payload.id?action.payload:val
        )
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; // Error message will be here
      })
  },
});

export default userDetails.reducer;
export const { searchUser } = userDetails.actions;
