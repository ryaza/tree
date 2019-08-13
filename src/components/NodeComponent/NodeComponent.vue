<template>
    <li :class="$style.wrapper">
        <div :class="$style.container">
            <span :class="$style.label">
                {{ node.label }}
            </span>
            <div
                :class="$style.buttons"
            >
                <button
                    :class="$style.button"
                    @click="toggleAddNode"
                >
                    <i class="fas fa-plus" />
                </button>
                <button
                    :class="$style.button"
                    @click="toggleEditNode"
                >
                    <i class="fas fa-pen"/>
                </button>
                <button
                    v-if="node.id != 1"
                    :class="$style.button"
                    @click="removeNode"
                >
                    <i class="fas fa-trash"/>
                </button>
            </div>
        </div>
        <div :class="$style.editContainer">
            <input
                v-show="showAddInput"
                type="text"
                ref="addInput"
                placeholder="Добавить новый узел"
                v-model="nodeValueAdd"
                :class="$style.input"
                @keydown.enter="addNode"
            >
            <input
                v-show="showEditInput"
                type="text"
                ref="editInput"
                placeholder="Отредактировать узел"
                v-model="nodeValueEdit"
                :class="$style.input"
                @keydown.enter="editNode"
            >
        </div>
        <ul v-if="node.children && node.children.length">
            <node-component v-for="child in node.children" :node="child" :key="child.id"/>
        </ul>
    </li>
</template>
<script src="./NodeComponent.js"/>
<style
    src="./NodeComponent.scss"
    lang="scss"
    module
/>
